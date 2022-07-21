import { useEffect, useState } from "react";
import { LbCard } from "../Components";
import { LbGridMenu } from "../Components/LbGridMenu/LbGridMenu.style"
import { ListMenuService } from "../Services/ListMenu.service";

const Home = () => {
    const [menu, setMenu] = useState<any>([]);

    const fetchMenu = async () => {
        const resp = await ListMenuService();
        setMenu(resp);
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    return <>
        <br/><br/><br/><br/>
        <LbGridMenu>
            {menu?.map((item: any) => <LbCard key={item.id} {...item} />)}
        </LbGridMenu>
    </>
}

export { Home };