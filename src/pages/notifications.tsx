import Layout from "@/components/template/Layout";
import useAppData from "@/data/hooks/useAppData";



export default function Notifications() {
  const {theme,ToggleTheme} = useAppData();

  return (
      <Layout title="Notifications" subtitle="Manage your system notifications">
        <h3>{theme}</h3>
        <button onClick={ToggleTheme}>Toggle Theme</button> 
      </Layout>
  )
}
