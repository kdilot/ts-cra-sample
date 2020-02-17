import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducers';
import { changeField, initializeForm } from 'reducers/auth';
import { useCallback } from 'react';

export const useAuth = () => {
    const dispatch = useDispatch();

    const useChangeField = useCallback(
        (value: object) => dispatch(changeField(value)),
        [dispatch],
    );
    const useInitializeForm = useCallback(
        (value: string) => dispatch(initializeForm(value)),
        [dispatch],
    );

    return { useChangeField, useInitializeForm };
};

export const useAuthState = () => {
    return useSelector((state: RootState) => state.auth);
};

export default { useAuth, useAuthState };
