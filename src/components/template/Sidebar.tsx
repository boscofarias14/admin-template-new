import { HomeIcon, LogoutIcon, NotificationIcon, SettingsIcon } from "../icons"
import SidebarItem from "./SidebarItem"
//import SidebarItem from "./SidebarItem"

interface SidebarProps{

}

export default function Sidebar(){
    return(
        <aside className={`
                    flex flex-col
                    bg-gray-200 text-gray-700
                    dark:bg-gray-900 dark:text-gray-200

                    `}>
            <div className={
                `bg-gradient-to-r from-blue-500 to-blue-800
                h-20 w-20
                flex flex-col justify-center items-center`
            }></div>
            <ul className="flex-grow">
                <SidebarItem url='/' text="Home" icon={HomeIcon} />
                <SidebarItem url='/settings' text="Settings" icon={SettingsIcon} />
                <SidebarItem url='/notifications' text="Notifications" icon={NotificationIcon} />
            </ul>
            <ul>
                <SidebarItem onClick={() => console.log("logout")} 
                             text="Logout" 
                             icon={LogoutIcon} 
                             className={`
                             text-red-600  dark:text-red-400
                             hover:bg-red-400 hover:text-white 
                             dark:hover:text-white
                             `} />          
            </ul>
        </aside> 
            
    )
}