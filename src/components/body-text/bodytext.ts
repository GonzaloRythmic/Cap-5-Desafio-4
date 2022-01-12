export function initBodyText (){
    class BodyTextComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const divTitle = document.createElement("div");
            const divBodyText = document.createElement("div");
            const divBodyText2 = document.createElement("div");
            const divBodyText3 = document.createElement("div");
            const divBodyText4 = document.createElement("div");
            const divBodyText5 = document.createElement("div");
            const divTitle2 = document.createElement("div");
            
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");

            divTitle.innerHTML =`
            <h1 class = "body-text-1">Subtitulo</h1>`; 

            divBodyText.className = "body-text-2";
            divBodyText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
           
            divBodyText2.className = "body-text-2";
            divBodyText2.textContent = "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
            
            divBodyText3.className = "body-text-3";
            divBodyText3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
            


            divTitle2.innerHTML =`
            <h1 class = "body-text-1">Subtitulo 2</h1>`;

            divBodyText4.className = "body-text-2";
            divBodyText4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
           
            divBodyText5.className = "body-text-2";
            divBodyText5.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";




            
            style.innerHTML = `
                .body-text-1 {
                    font-family: "Roboto"; 
                    font-size: 38px;
                    display: flex;
                    align-items: center;
                    text-align: right;
                    margin-top: 72px;
                }
                .body-text-2{
                    font-family: "Roboto"; 
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 33px;
                }
                .body-text-3{
                    font-family: "Roboto"; 
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    margin-top: 33px;
                }`;

            shadow.appendChild(divTitle);
            shadow.appendChild(divBodyText);
            shadow.appendChild(divBodyText2);
            shadow.appendChild(divBodyText3);
            shadow.appendChild(divTitle2);
            shadow.appendChild(divBodyText4);
            shadow.appendChild(divBodyText5);
            shadow.appendChild(style);
            
        }
    }
    customElements.define ("body-text-component", BodyTextComponent);
}
