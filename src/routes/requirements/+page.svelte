<svelte:head>
    <link rel="stylesheet" href="https://css.hackclub.com/theme.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=list_alt_check,pets" />
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Banner from "$lib/banner.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<style>
    #body {
        background-color: rgb(111, 73, 126);
        padding: 40px;
    }
    h1 span {
        font-size: 100px;
        background-color: rgb(82, 47, 102);
        padding: 30px;
        border-radius: 360px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    h1 {
        font-size: 40px;
    }
    .rule {
        background-color: rgb(42, 1, 58);
        padding: 25px;
        margin-bottom: 20px;
        border-radius: 30px;
        transition: border-radius 0.4s ease-in-out, background-color 0.3s ease-in-out;
    }
    .rule div {
        margin-top: 20px;
        background-color: rgb(121, 101, 128);
        margin-left: 50px;
        margin-right: 50px;
        padding: 10px;
    }
    .rule:hover {
        background-color: rgb(66, 26, 82);
        border-radius: 50px;
    }
    a {
        color: white;
    }
</style>

<Navbar />
<Banner />
<div id="body">
    <h2 style="font-size: 40px;">Project Requirements</h2>
    <br><br>
    <h1 translate="no"><span class="material-symbols-outlined">list_alt_check</span></h1>
    <br><br><br>
    <h2 style="font-family: Phantom Sans;">Below are the base requirements to ship and submit your project</h2>
    <br><br>
    <div class="rule">
        <h2>8 Hours</h2>
        <h3>You must log at least 8 full hours of coding for your project on <a href="https://hackatime.hackclub.com">Hackatime</a>. More hours are encouraged and rewarded!</h3>
    </div>
    <div class="rule">
        <h2>SvelteKit and Static</h2>
        <h3>You must use SvelteKit to make your app (Vite does not pass the vibe check). Documentation can be found <a href="https://svelte.dev">here</a>.</h3>
        <h3>Your site should be static, and hosted on a service such as Github Pages.</h3>
    </div>
    <div class="rule">
        <h2>Themed around Endangered Animals</h2>
        <h3>Your site must be themed around an animal that is considered endangered or at risk. Note that no vulgar, violent or distressing content is allowed.</h3>
    </div>
    <div class="rule">
        <h2>Include The Zoo Banner Component</h2>
        <h3><a href="https://raw.githubusercontent.com/lynn89-sudo/red-panda/refs/heads/main/src/lib/Zoo.svelte">This component</a> must be imported (not copy pasted) into the top of each page on your submission (more on components in the guide on Slack)</h3>
    </div>
    <div class="rule">
        <h2>Include README</h2>
        <h3>Make a README in your repo which includes an overall description of your project along with descriptions of each interactive element/aspect of your animal (along with how you implemented it)</h3>
    </div>
    <div class="rule">
        <h2>Interactive Page</h2>
        <h3>Your site should include a page where users can interact with your dynamic animal in some way, shape, or form. It must have at least one external stimuli and one internal stimuli.</h3>
        <div>
            <h2>Internal Stimuli</h2>
            <h3>are factors such as time, random chance, etc. They aren't directly affected by user-input or action.</h3>
        </div>
        <div>
            <h2>External Stimuli</h2>
            <h3>are factors such as user clicks, mouse movement, etc. They are directly affected by user-input and action.</h3>
        </div>
    </div>
    <div class="rule">
        <h2>Facts Panel</h2>
        <h3>Your site must include a facts panel about your animal on the main page.</h3>
        <h3>Your facts panel must include at least three facts.</h3>
        <h3>Once users cycle through all facts (in any order), a button/link should be revealed or unlocked to the interactive demo page.</h3>
        <h3>The panel must include $state and $derived runes</h3>
    </div>
    <br><br>
    <h2>More questions?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />