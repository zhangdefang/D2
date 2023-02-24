//组件
import User from "../../pages/user/userOption";
import MenuList from "../../pages/user/menu";
import RoleAuthorization from "../../pages/user/roleAuthorization";
import UserType from "../../pages/user/userType";
import ActionLog from "../../pages/user/actionLog";
import OnlineUser from "../../pages/user/onlineUser";
import DropDown from "../../pages/navigation/dropdown";

const routes = [
    {
        path: '/home/user/userOption',
        component: User
    },
    {
        path: '/home/user/menu',
        component: MenuList
    },
    {
        path: '/home/user/roleAuthorization',
        component: RoleAuthorization
    },
    {
        path: '/home/user/userType',
        component: UserType
    },
    {
        path: '/home/user/actionLog',
        component: ActionLog
    },
    {
        path: '/home/user/onlineUser',
        component: OnlineUser
    },
    {
        path: '/home/navigation/dropdown',
        component: DropDown
    }
]
export default routes