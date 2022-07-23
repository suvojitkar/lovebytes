import { useContext, useEffect, useState } from "react";
import { LbCard, LbSearch, LbGridMenu, LbToggle } from "Components";
import { ListMenuService } from "Services/ListMenu.service";
import { menuType } from "./Home.interface";
import { Container } from "@mui/material";
import { searchContext, toggleContext } from "App";

const Home = () => {
    const { searchText } = useContext(searchContext);
    const [menu, setMenu] = useState<Array<menuType> | null>(null);
    const { checked } = useContext(toggleContext);
    const fetchMenu = async () => {
        const resp = await ListMenuService();
        setMenu(resp);
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    return <Container>
        <br /><br /><br /><br />
        <LbSearch />
        <br /><br />
        <LbToggle/>
        <br />
        <LbGridMenu>
            {menu?.map((item: any) => {
                if (searchText && checked) {
                        return item.name.toLowerCase().includes(searchText.toLowerCase()) &&
                               item.type === "veg" &&
                               <LbCard key={item.id} {...item} />
                    }
                    if(searchText) {
                        return item.name.toLowerCase().includes(searchText.toLowerCase()) && <LbCard key={item.id} {...item} />
                    }
                    if (checked) {
                        return item.type === "veg" && <LbCard key={item.id} {...item} />
                    }
                    return <LbCard key={item.id} {...item} />
                }
            )}
        </LbGridMenu>
    </Container>
}

export { Home };