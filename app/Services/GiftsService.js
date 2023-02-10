import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftApi } from "./AxiosService.js";

class GiftsService{
    constructor(){
        console.log('service too lol');
    }

    async getGifts(){
        const res = await giftApi.get('/api/gifts')
        const newArray = res.data.map(g => new Gift(g))
        appState.gifts = newArray
        console.log(res.data);
    }

async open(tag){
    const res = await giftApi.put(`/api/gifts/${name}`)
    console.log(res)
}
}



export const giftsService = new GiftsService()