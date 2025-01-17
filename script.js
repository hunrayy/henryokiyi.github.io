document.addEventListener("DOMContentLoaded", () => {
    const terminalOutput = document.getElementById("terminal-output");
    const cursor = document.getElementById("cursor");

    const textContent = `
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span><span class="blue-color">$</span>&nbsp;cd portfolio
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span> <span class="blue-color">/portfolio$</span>&nbsp;ls
home.txt&nbsp;&nbsp;&nbsp;about.txt&nbsp;&nbsp;&nbsp;contactMe.txt&nbsp;&nbsp;&nbsp;services.txt
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span><span class="blue-color">/portfolio$</span>&nbsp;cat home.txt
A highly skilled Full Stack Developer with a deep passion for problem-solving, dedicated to developing, designing, and creating intuitive, user-friendly, and innovative websites that enhance user experiences and drive digital transformation.
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span><span class="blue-color">/portfolio$</span>&nbsp;cat about.txt
My journey in the tech world began with a fascination for how things work behind the scenes. This curiosity led me to explore the vast landscape of web development, where I discovered my love for coding. Over the years, I've honed my skills in various programming languages and frameworks, enabling me to bring ideas to life with clean, efficient and reusable code.
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span><span class="blue-color">/portfolio$</span>&nbsp;cat contactMe.txt
Mail: <a href="mailto:henryokiyi8@gmail.com.com" class="anchor-tag">henryokiyi8@gmail.com</a> <br />social-links: <a class="anchor-tag" target="_blank" href="https://www.github.com/hunrayy">Github</a> | <a href="https://www.linkedin.com/in/henry-okiyi-0246b6299/" target="_blank" class="anchor-tag">Linkedin</a> | <a target="_blank" class="anchor-tag" href="https://www.instagram.com/henry_hunray">Instagram</a> | <a href="https://x.com/HenryOkiyi" target="_blank" class="anchor-tag">X</a>
<span class="green-color">henry@okiyi</span>:<span class="red-color">~</span> <span class="blue-color">/portfolio$</span>&nbsp;cat services.txt
<b>My services include:</b>
--Web development
--ui/ux design
--Search Engine Optimization...and lots more <span class="green-color-blink">
To view a more animated version of my portfolio, type "npm run dev":</span><form id="command-form">
<span id="form-error"></span>
<input type="text" id="command-form-input" /><br/>
<span id="form-success"></span>
</form>
    `;

    let index = 0;
    const typingSpeed = 6; // Milliseconds per character
    const cursorBlinkSpeed = 500; // Milliseconds per blink



    // Simulate typing effect
    const typeText = () => {
        if (index < textContent.length) {
            terminalOutput.innerHTML = textContent.slice(0, index).replace(/\n/g, '<br/>');
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            clearInterval(cursorBlinkInterval); // Stop cursor blinking when typing is complete
            cursor.style.display = "none"; // Hide cursor

            const form = document.getElementById('command-form')
            const inputField = document.getElementById('command-form-input')
            const formError = document.getElementById('form-error')
            const formSuccess = document.getElementById('form-success')
            form.addEventListener('submit', (e)=> {
                e.preventDefault()
                formError.innerHTML = ''
                formSuccess.innerHTML = ''
                const errorMessage = `${inputField.value.replace(/ /g, ' ')}: command not found`;

                if(inputField.value.toLowerCase() !== 'npm run dev'){
                    // inputField.value = ''
                    // Call the typewriter effect
                    typeWriterEffect(formError, errorMessage, 50); // Adjust typing speed if needed

                }else{
                    formError.innerHTML = ''
                    // Raw text to be displayed, wrapped in <pre> for proper formatting
                    const successMessage = `
                    > portfolio@0.0.0 dev<br />
                    > vite<br />
                    <span class="green-color">VITE v5.2.11</span>  ready in 397 ms`;
                    formSuccess.innerHTML = successMessage
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth' // Optional: adds a smooth scrolling effect
                    });
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

                    async function runCode() {
                        await delay(4000); // Waits for 4 seconds
                        window.open('https://henryokiyi.vercel.app', '_blank');
                        
                    }
                    runCode();
                    
                    
                }
            })
        }
    };

    // Simulate cursor blinking
    const cursorBlinkInterval = setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }, cursorBlinkSpeed);

    typeText();
});








// Typewriting effect for form-error
// const typeWriterEffect = (element, text, speed) => {
//     let i = 0;

//     const typeCharacter = () => {
//         if (i < text.length) {
//             // element.innerHTML += text[i];
//             element.innerHTML += text[i]
//             // element.textContent += text[i];
            

//             i++;
//             setTimeout(typeCharacter, speed); // Delay for each character
//         }
//     };

//     typeCharacter();
// };