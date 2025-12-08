<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { fly, scale, slide } from "svelte/transition";

    let toggle = $state(false);
    let mode = $state("Beginner Mode");
    let modeOp = $state("Expert Mode");
    let overlayToggle = $state(false);

    onMount(() => {
        setTimeout(()=> {
            toggle = true;
        }, 100);
        if (localStorage.getItem("mode") == null) {
            localStorage.setItem("mode", 1);
        }
        else if (localStorage.getItem("mode") == 2) {
            mode = "Expert Mode";
            modeOp = "Beginner Mode";
        }
    })
    function process() {
        if (localStorage.getItem("mode") == 1) {
            localStorage.setItem("mode", 2);
            mode = "Expert Mode";
            modeOp = "Beginner Mode";
        } 
        else {
            localStorage.setItem("mode", 1);
            mode = "Beginner Mode";
            modeOp = "Expert Mode";
        }
        overlayToggle = true;
    }
</script>
<style>
    #container {
        position: fixed;
        bottom: 18px;
        right: 7px;
        z-index: 999;
        margin: 0;

        h2 {
            margin: 0;
        }
        button {
            background-color: rgba(23, 138, 23, 0.856);
        }
        button:hover {
            color: white;
            background-color: rgb(23, 138, 23);
        }
    }
    #container2 {
        background-color: rgba(1, 36, 1, 0.959);
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 20px;
    }
</style>
{#if toggle}
    <div transition:fly={{y:200, duration:1200}} id="container">
        <h2><button onclick={() => {process()}}>Change to {modeOp}</button></h2>
    </div>
{/if}
{#if overlayToggle}
    <div transition:slide id="container2">
        <h1 style:margin-top=50px>{mode}</h1>
        <h2 style:margin-top=20px style:margin-bottom=40px ><span transition:scale={{delay:500}} style="background-color: green">ENABLED</span></h2>
        {#if mode == "Expert Mode"}
        <h3>With expert mode, you have more creative freedom in respect to what you make for your project; however, we expect greater quality and functionality in your submission. You should choose this mode if you are comfortable with Svelte, experienced with component-based web-development frameworks, or willing to push yourself and make a really cool project.</h3>
        {:else}
        <h3>With beginner mode, you will get a more guided experience; the requirements for your project will be clearer and layed out. You should choose this mode if you have web-development experience, but this is your first time using Svelte or even any component-based framework. Note that this mode gives less rewards compared to expert mode.</h3>
        {/if}
        <h2 style:margin-top=50px ><button onclick={()=> {overlayToggle = false; window.location.href = base + "/";}}>Return</button></h2>
    </div>
{/if}
