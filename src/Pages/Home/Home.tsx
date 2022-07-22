import { useEffect, useState } from "react";
import { LbCard, LbGridMenu } from "Components";
import { ListMenuService } from "Services/ListMenu.service";
import { menuType } from "./Home.interface";

const Home = () => {
    const [menu, setMenu] = useState<Array<menuType> | null>(null);

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