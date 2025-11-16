<svelte:head>
    <link rel="stylesheet" href="https://css.hackclub.com/theme.css">
    {#each [1,2,3,4,5] as n}
        <link rel="preload" href={`boba/bobaD${n}.png`} as="image" />
    {/each}
    {#each [1,2,3,4,5] as n}
        <link rel="preload" href={`boba/bobaV${n}.png`} as="image" />
    {/each}
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte"
    import Banner from "$lib/banner.svelte"
    import Footer from "$lib/footer.svelte"
    import { onMount } from "svelte";

    let faq = $state(0);

    let width = $state(true);
    let select1 = $state("bobaD");
    onMount(function() {
        if (window.matchMedia("(max-width: 750px)").matches) {
            width = true;
        }
        else {
            width = false;
        }


        function resize(e) {
            if (window.matchMedia("(max-width: 750px)").matches) {
                width = true;
            }
            else {
                width = false;
            }

            if (!width) {
                select1 = "bobaD"; //D
            }
            else {
                select1 = "bobaV";
            }
        }
        resize(window.matchMedia("(max-width: 750px)").matches);
    })
</script>
<style>
    a {
        color: white;
    }
    #b1 {
        animation: bee1 3s ease-in-out infinite;
    }
    #b2 {
        animation: bee2 3.5s ease-in-out infinite;
    }
    @keyframes bee1 {
        0% {
            transform: translateY(0)
        }
        50% {
            transform: translateY(30px)
        }
        100% {
            transform: translateY(0)
        }
    }
    @keyframes bee2 {
        0% {
            transform: translateY(0)
        }
        50% {
            transform: translateY(-15px)
        }
        100% {
            transform: translateY(0)
        }
    }

    button {
        border: none;
        background-color: rgb(80, 69, 9);
    }
    button:hover {
        color: white;
        background-color: rgb(128, 111, 16);
    }

    #svelte {
        padding-top: 50px;
        padding-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgb(14, 32, 14);

        img {
            width: 100px;
            height: 100px;
            cursor: pointer;
            transition: transform 0.5s ease-in-out;
        }
    }
    #svelte img:hover {
        transform: rotate(7.5deg);

    }
    #svelte button {
        background-color: rgb(44, 68, 44);
    }
    #svelte button:hover {
        background-color: rgb(38, 114, 38);
    }

    #countdown {
        padding-top: 50px;
        padding-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgb(7, 83, 77);
 

        img {
            width: 30%;
            height: auto;
            margin: 0 auto;
            display: block;
            transition: width 0.7s ease-in-out;

            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            
        }
        img:hover {
            cursor: grab;
            width: 33.5%;
        }

        button {
            background-color: rgb(30, 61, 65);
        }
        button:hover {
            background-color: rgb(84, 116, 116);
        }
    }
    @media (max-width: 750px) {
        #countdown img {
            width: 80%;
        }
        #countdown img:hover {
            width: 90%;
        }
    }

    #example {
        padding-top: 50px;
        padding-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgb(102, 40, 88);

        img {
            width: 50%;
            padding-top: 20px;
            margin: 0 auto;
            display: block;
            transition: width 0.7s ease-in-out;

            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;

        }
        img:hover {
            cursor: grab;
            width: 55%;
        }
        button {
            background-color: rgb(65, 30, 65);
        }
        button:hover {
            background-color: rgb(116, 84, 113);
        }
    }
    @media (min-width: 750px) {
        #example img {
            width: 20%;
        }
        #example img:hover {
            width: 23%;
        }
    }


    #faq {
        padding-top: 50px;
        padding-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: rgb(165, 123, 6);
        
        h1 span {
            font-size: 50px;
            background-color: rgb(116, 77, 5);
            padding: 10px;
            border-radius: 20px;
        }
        img {
            width: 50%;

            transition: width 0.7s ease-in-out;

            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
        }
        img:hover {
            cursor: grab;
            width: 55%;
        }

        div {
            background-color: rgb(88, 66, 5);
            margin-left: 60px;
            margin-right: 60px;
            margin-bottom: 20px;
            padding: 10px;

            h2 {
                margin-bottom: 5px;
                margin-top: 10px;
            }

            a {
                color: white;
            }

            button {
                background-color: rgb(48, 41, 1);

                span {
                    vertical-align: -0.11em;
                }
            }
            button:hover {
                background-color: rgb(131, 111, 1);
            }

            h3 {
                display: none;
            }
            h3.on {
                display: block
            }
        }
    }
    @media (min-width: 750px) {
        #faq img {
            width: 20%;
        }
        #faq img:hover {
            width: 23%;
        }
    }
</style>
<Navbar />
<Banner />
<div style="postion: relative; user-select: none; margin-bottom: -10px; padding: 0; overflow: clip;">
    <img src="boba/{ select1 }1.png" style="position: absolute; left: 0; right: 0; width: 100%; height: auto;" alt="Overlay 1"/>
    <img src="boba/{ select1 }2.png" style="position: absolute; left: 0; right: 0; width: 100%; height: auto;" alt="Overlay 2"/>
    <img id="b1" src="boba/{ select1 }3.png" style="position: absolute; left: 0; right: 0; width: 100%; height: auto;" alt="Overlay 3"/>
    <img id="b2" src="boba/{ select1 }4.png" style="position: absolute; left: 0; right: 0; width: 100%; height: auto;" alt="Overlay 4"/>
    <img src="boba/{ select1 }5.png" style="position: absolute; left: 0; right: 0; width: 100%; height: auto; -webkit-user-drag: none; -moz-user-drag: none" alt="Overlay 5"/>
</div>
<div>
    <img src="boba/{ select1 }1.png" style="display: hidden; width: 100%; height: auto;" alt="Blank"/>
</div>
<div style="background-color: rgb(230, 177, 30); color: white; padding: 20px;">
    <br>
    <h2 style="font-size: 70px;">Mynts</h2>
    <h3>are the currency you earn for your animals in the zoo. The better your submissions are, the more mynts you earn.</h3>
    <br>
    <h2><span style="background-color: rgb(100,100,60)">1 MYN = 0.75 USD</span></h2>
    <br><br>
    <button onclick={ window.location.href = "/mynts" }><h2>How do I earn mynts?</h2></button>
    <br><br>
</div>
<div id="svelte">
    <h2>What is Svelte?</h2>
    <a href="https://svelte.dev"><img src="favicon.svg" alt="Svelte Logo"/></a>
    <br><br>
    <h3>Svelte is a web development UI framework that uses a compiler to let you write concise components that do minimal work in the browser, using language syntax you probably already know: HTML, CSS and JS (or TS).</h3>
    <h3>It's a great alternative to React, Vue, and other JS frameworks!</h3>
    <p style="color: white;">(This website was made with Svelte)</p>
    <br>
    <a href="https://svelte.dev"><button><h2>Visit the Svelte Website</h2></button></a>
    <br><br>
</div>
<div id="countdown">
    <h2>Submissions for V2 are open now!</h2>
    <br>
    <a href="https://submit.hackclub.com/zoo"><button><h2>Submit</h2></button></a>
    <br>
    <img src="whale.png" alt="Whale Plushie"/>
</div>
<div id="example">
    <h2>What exactly do I need to include? Can I see an example project?</h2>
    <br><br>
    <h3>View the project requirements here</h3>
    <button onclick = { window.location.href = "/requirements" }><h2>View Requirements</h2></button>
    <br><br>
    <h3>This is a mid/high level project example. Note that this project is from V1, and requirements for V2 are more extensive; however, this project is a useful example for the facts panel and interactive page nontheless.</h3>
    <button onclick = { window.location.href = "https://lynn89-sudo.github.io/red-panda" }><h2>Take me there!</h2></button>
    <br><br><br><br>
    <img src="pig.png" alt = "Pig Plushie"/>
</div>
<div id="faq">
    <h1><span>FAQ</span></h1>
    <br>
    <h3>If it helped Oscar, it should help you too ^w^</h3>
    <br>
    <img src="octo.png" alt="Ollie the Octopus"/>
    <br><br>
    <div>
        <h2>How many hours minimum do I need to work on my site?</h2>
        <button translate="no" onclick = { faq = 1 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 1 }>You need to work on your site for at least 10 hours to receive any mynts. All hours must be tracked on <a href="https://hackatime.hackclub.com">Hackatime</a>.</h3>
    </div>
    <div>
        <h2>How many mynts do I need to buy a plushie and how do I use them?</h2>
        <button translate="no" onclick = { faq = 2 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 2 }>Throughout the duration of the YSWS, your mynts are added up. By the end, after everything is finalized, you will get an <a href="https://hcb.hackclub.com">HCB</a> grant equivalent to the amount of mynts you earned (1 MYN = 0.75 USD). Whatever your choice of plushie costs + delivery fees (or just pick it up for less) is the amount of mynts you will need!</h3>
    </div>
    <div>
        <h2>What if I live in a region or country without an Ikea?</h2>
        <button translate="no" onclick = { faq = 3 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 3  }>In the case that you cannot purchase from Ikea due to unviability, you can declare this on your submission form and use your mynts towards services such as Amazon or Shopee instead. No small/local stores though, must be an official service. View <a href="/alternative">this page</a> for more information.</h3>
    </div>
    <div>
        <h2>Can I use Artificial Intelligence to assist me with my project?</h2>
        <button translate="no" onclick = { faq = 4 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 4 }>You can use AI to help you debug code, however all creative ideas must be original and you cannot copy/paste any AI generated code into your project. If you use any AI, you MUST declare it on your submission form.</h3>
    </div>
    <div>
        <h2>How old must I be to participate?</h2>
        <button translate="no" onclick = { faq = 5 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 5 }>You must be in Middle School or High School to participate. Only those 13-18 can recieve prizes.</h3>
    </div>
     <div>
        <h2>If I did Version 1, can I still participate in Version 2?</h2>
        <button translate="no" onclick = { faq = 8 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 8 }>Yes; however, we'll be comparing your two submissions and expect to see progress and greater improvement!</h3>
    </div>
    <div>
        <h2>How many projects can I submit?</h2>
        <button translate="no" onclick = { faq = 6 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 6 }>You can only submit one project. So make it count!</h3>
    </div>
    <div>
        <h2>What if I have other questions?</h2>
        <button translate="no" onclick = { faq = 7 }><span class="material-symbols-outlined">arrow_drop_down_circle</span></button>
        <br><br>
        <h3 class:on = { faq == 7 }>Hop onto <em>#the-zoo</em> channel in the Hack Club Slack if you have additional questions, or just want to vibe!</h3>
    </div>
</div>
<Footer />

 