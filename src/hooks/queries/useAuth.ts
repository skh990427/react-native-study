import {useMutation, useQuery} from "@tanstack/react-query";
import {getAccessToken, getProfile, logout, postLogin, postSignup} from "@/src/api/auth";
import {UseMutationCustomOptions, UseQueryCustomOptions} from "@/src/types/common";
import {removeEncryptStorage, setEncryptStorage} from "@/src/utils";
import {removeHeader, setHeader} from "@/src/utils/header";
import {useEffect} from "react";
import queryClient from "@/src/api/queryClient";
import {numbers, queryKeys, storageKeys} from "@/src/constants";

function useSignup(mutationOptions?: UseMutationCustomOptions) {
    return useMutation({
        mutationFn: postSignup,
        ...mutationOptions,
    });
}


function useLogin(mutationOptions?: UseMutationCustomOptions) {
    return useMutation({
        mutationFn: postLogin,
        onSuccess: ({accessToken, refreshToken}) => {
            setEncryptStorage(storageKeys.REFRESH_TOKEN, refreshToken);
            setHeader('Authorization', `Bearer ${accessToken}`);
        },
        onSettled: () => {
            queryClient.refetchQueries({queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN]});
            queryClient.invalidateQueries({queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE]})
        },
        ...mutationOptions
    });
}

function useGetRefreshToken() {
    const {isSuccess, data, isError} = useQuery({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
        queryFn: getAccessToken,
        staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
        refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
        refetchOnReconnect: true,
        refetchIntervalInBackground: true,
    });

    useEffect(() => {
        if (isSuccess) {
            setHeader('Authorization', `Bearer ${data.accessToken}`);
            setEncryptStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            removeHeader('Authorization');
            removeEncryptStorage(storageKeys.REFRESH_TOKEN);
        }
    }, [isError]);

    return {isSuccess, isError}
}

function useGetProfile(queryOptions: UseQueryCustomOptions) {
    return useQuery({
        queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
        queryFn: getProfile,
        ...queryOptions
    });
}

function useLogout(mutationOptions?: UseMutationCustomOptions) {
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            removeHeader('Authorization');
            removeEncryptStorage(storageKeys.REFRESH_TOKEN);
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: [queryKeys.AUTH]})
        },
        ...mutationOptions
    })
}

function useAuth() {
    const signupMutation = useSignup();
    const refreshTokenQuery = useGetRefreshToken();
    const getProfileQuery = useGetProfile({
        enabled: refreshTokenQuery.isSuccess, //refresh 토큰 쿼리가 성공 후 가져옴
    })
    const isLogin = getProfileQuery.isSuccess;
    const loginMutation = useLogin();
    const logoutMutation = useLogout();

    return {signupMutation, loginMutation, isLogin, getProfileQuery, logoutMutation};
}

export default useAuth
