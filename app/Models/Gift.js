export class Gift{
    constructor(data){
        this.tag = data.tag
        this.url = data.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
        this.opened = data.opened
    }



    get OpenedTemplate(){
        return`
        <div class="col-4">
        <div class="card">
        <img src="${this.url}" alt="" class="card-img-top">
        <div class="card-body">
            <div class="card-title">
            <p>${this.tag}</p>
            </div>
        </div>
        </div>
    </div>
        `
    }
}