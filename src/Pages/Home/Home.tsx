import { useEffect, useState } from "react";
import { LbCard, LbSearch, LbGridMenu, LbToggle } from "Components";
import { ListMenuService } from "Services/ListMenu.service";
import { menuType } from "./Home.interface";
import { Container } from "@mui/material";

const Home = () => {
    const [searchText, setsearchText] = useState("");
    const [toggleChecked, setToggleChecked] = useState(false);
    const [menu, setMenu] = useState<Array<menuType> | null>(null);

    const defaultProp = {}
    const defSkeletonArray:any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const fetchMenu = async () => {
        const resp = await ListMenuService();
        setMenu(resp);
    }

    useEffect(() => {
        setTimeout(fetchMenu, 5000);
    }, [])

    return <Container>
        <br /><br /><br /><br />
        <LbSearch setSearchFn={setsearchText}/>
        <br /><br />
        <LbToggle isChecked={toggleChecked} updateToggleCheck={setToggleChecked}/>
        <br />
        <LbGridMenu>
            {menu ? menu.map((item: any) => {
                if (searchText && toggleChecked) {
                        return item.name.toLowerCase().includes(searchText.toLowerCase()) &&
                               item.type === "veg" &&
                               <LbCard key={item.id} {...item} />
                    }
                    if(searchText) {
                        return item.name.toLowerCase().includes(searchText.toLowerCase()) && <LbCard key={item.id} {...item} />
                    }
                    if (toggleChecked) {
                        return item.type === "veg" && <LbCard key={item.id} {...item} />
                    }
                    return <LbCard key={item.id} {...item} />
                }
            ) : defSkeletonArray.map((elem:any, idx: any) => <LbCard key={idx+100} {...defaultProp}/>)}
        </LbGridMenu>
    </Container>
}

export { Home };