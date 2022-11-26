import { userInfo } from "../utils/fetchLocalStorageUser"

const userInformation = userInfo()
export const initialState = {
    user: userInformation
}