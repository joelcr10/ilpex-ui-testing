import api from "../../network/api";
import { useNavigation } from "@react-navigation/native";

interface LogInUserProp{
    loginUsername: string,
    loginPassword: string
}


interface LoginUserResponse{
    success: boolean;
    errorMessage: string;
    statusCode: string;
    loginResp: string;
}


export async function loginUser({loginUsername, loginPassword}: LogInUserProp): Promise<LoginUserResponse>{
    let success: boolean = false;
    let errorMessage: string = '';
    let statusCode: string = '';
    let loginResp: any;

    console.log('inside login')
    const logInPayload = {
        email: loginUsername,
        password: loginPassword,
    };

    try{
        const logInResponse = await api.post(
            '/api/v1/userLogin',
            logInPayload
        );
        
        console.log('login response', logInResponse);

        statusCode = logInResponse.status.toString();
        {
            statusCode === '200' ? (success = true) : (success = false);
        }

        loginResp = logInResponse.data;

        console.log(loginResp.id);


    }catch(error: any){
        console.log('Error while logging in:', error);

        errorMessage = error.message;
    }

    return {success, statusCode, loginResp, errorMessage};
}

