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
            
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");

            divTitle.innerHTML =`
            <h1 class = "body-text-1">Subtitulo</h1>`; 

            divBodyText.className = "body-text-2";
            divBodyText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
           
            divBodyText.className = "body-text-2";
            divBodyText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";

            
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
                }`;

            shadow.appendChild(divTitle);
            shadow.appendChild(divBodyText);
            shadow.appendChild(style);
            
        }
    }
    customElements.define ("body-text-component", BodyTextComponent);
}
