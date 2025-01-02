class Rectangle {
    constructor(width, height){
        if(width <= 0 || height <=0){
            throw new Error("valeur negative non accepter !",{cause: {code: 404, url: "page introuvable !"}});
        }
        this.width = width;
        this.height = height;
    }
    
    get perimeter (){
        return 2 * (this.width + this.height);
    }
    get isValid(){
        return this.largeur > 0 && this.hauteur > 0;
    }
    isBiggerThan(r){
        return this.perimeter > r.perimeter;
    }
}
class Square extends Rectangle{
    constructor(width){
        super(width, width)
    }
    isBiggerThan(r){
        return this.perimeter > r.perimeter;
    }
}
const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);

try{
    const r2 = new Rectangle(-10, 20);
} catch(e){
    console.error(e.message);
    console.log(e.cause.code);
    if(e.cause.code === 404){
        console.log("impoissible de continuer");
    }
}

// console.log(r2.isValid);

const c = new Square(10);
console.log(c.perimeter);
console.log(c.isBiggerThan(r));
console.log(r.isBiggerThan(c));

// class Book {
//     constructor (titre, nbPage){
//         this.titre = titre;
//         this.nbPage = nbPage;
//         this._page = 1;
//     }
//     get page(){
//         return this._page;
//     }
//     nextPage(){
//         this._page++;
//     }
//     close(){
//         this._page = 1;
//     }

// }
// class Library{
//     constructor(){
//         this.books = [];
//     }
//     addBook(book){
//         this.books.push(book)
//     }
//     addBooks(tabBook){
//         this.books.push(...tabBook);
//     }
//     findBooksByLettrer(lettre){
//         const normalisationLettre = lettre.toUpperCase();
//         console.log(this.books.filter(({titre}) => titre[0].toUpperCase() === normalisationLettre));
//     }
// }
// const b = new Book("signeur des anneaux",200);
// console.log(b.page);
// b.nextPage();
// console.log(b.page);
// b.close();
// console.log(b.page);

// const l = new Library();
// l.addBook(b);
// l.addBooks([
//     new Book("Ready player one", 100),
//     new Book("oui-oui", 10),
//     new Book("Sillage", 50),
// ])
// console.log(l);
// console.log("les livre qui commence par la Lettre S sont :");
// l.findBooksByLettrer("S"); 
