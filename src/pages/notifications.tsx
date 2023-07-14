import Layout from "@/components/template/Layout";
import useAppData from "@/data/hooks/useAppData";

export default function Notifications() {
  
  const {ToggleTheme} = useAppData();

  return (
      <Layout title="Notifications" subtitle="Manage your system notifications">
        <button onClick={ToggleTheme}>Toggle Theme</button> 
      </Layout>
  )
}
