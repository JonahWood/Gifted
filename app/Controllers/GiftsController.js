import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts(opened){
    let template = ''
    console.log('[opened]',opened);

    appState.gifts.forEach(gift => template += gift.OpenedTemplate)
    setHTML('giftCards', template)
}



export class GiftsController{
    constructor(){
        this.getGifts()
    
    appState.on('gifts', _drawGifts)
    }

    async getGifts(){
        try {
            await giftsService.getGifts()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    async open(tag){
        try {
            giftsService.open(tag)
        } catch (error) {
            Pop.error(error)
        }
    }
}