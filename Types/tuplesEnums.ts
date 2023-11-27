const stuff:(string|number)[] = [1,'asd','bcde',2];

const color: [number,number,number] = [255,0,255];

type HttpResponse = [number,string];
const goodRes : HttpResponse = [200,"OK"];
// goodRes[0] = "400"
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();

const response: HttpResponse[] = [[400,"Not found"],[200,"OK"]]

enum OrderStatus {
    PENDING,SHIPPED,DELIVERED,RETURNED
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status:OrderStatus):boolean{
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.PENDING);

enum ArrowKeys {
    UP='up',
    DOWN='down',
    LEFT='left',
    RIGHT='right'
}
ArrowKeys.LEFT