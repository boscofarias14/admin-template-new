import Content from "./Content"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface LayoutProps{
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`dark flex h-screen w-screen`}>
            <Sidebar></Sidebar>  
            <div className={`flex flex-col 
                            dark:bg-gray-800
                           bg-gray-300 w-full
                           p-7`}>    
                <Header title={props.title} subtitle={props.subtitle}></Header>        
                <Content>{props.children}</Content>  
            </div>        
        </div>
    )
}