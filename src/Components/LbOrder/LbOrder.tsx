import { Card, CardContent, Typography } from "@mui/material";

const LbOrder = (props: any) => {
    return <>
        {props.menu.map((elem: any, idx: any) => {
            return <><Card key={idx + 10}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"> {props.id} </Typography>
                            Time: {elem.time} <br/>
                            Cost: {elem.cost} <br/>
                            Items: 
                            <hr/>
                            {elem.items.map((order: any, idxx: any) => {
                                return <div key={idxx+20}>
                                    {order.item_name} * {order.qty}
                                </div>
                            })}
                        </CardContent>
                    </Card><br/></>
        })}
        </>
}

export { LbOrder };