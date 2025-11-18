<script>
    import Navbar from "$lib/navbar.svelte";
    import Banner from "$lib/clubbanner.svelte";
    import Footer from "$lib/footer.svelte";

    import { base } from "$app/paths";
</script>
<svelte:head>
    <link rel="stylesheet" href="https://css.hackclub.com/theme.css">
</svelte:head>
<style>
    #body {
        background-color: rgb(13, 43, 107);
        padding: 40px;
    }
    h1 span {
        font-size: 100px;
        background-color: rgb(36, 28, 70);
        padding: 30px;
        border-radius: 360px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    h1 {
        font-size: 40px;
    }
    .box {
        background-color: rgb(28, 70, 28);
        padding: 20px;
        margin-bottom: 20px;
    }
    .requirement {
        background-color: green;
        padding: 10px;
        font-family: Space Mono
    }
</style>

<Navbar />
<Banner />
<div id="body">
    <h1><span translate="no" class="material-symbols-outlined">groups</span></h1>
    <br><br>
    <h1>The Zoo, for Hack Clubs</h1>
    <h3 style:font-family="Space Mono, Montserrat, Futura">Workshop Version</h3>
    <br>
    <div class="box">
        <h2>Ready to submit your work?</h2>
        <h3>Check over the requirements here:</h3>
        <br>
        <div class="requirement"><h3>Build your site on SvelteKit and statically host it.</h3></div><br>
        <div class="requirement"><h3>Include a dynamic facts panel with three facts on your animal; the facts panel must include buttons to cycle and use both <code style:color="black">$state</code> and <code style:color="black">$derived</code> runes to make it work.</h3></div><br>
        <div class="requirement"><h3>Include the animal itself in your site and use runes to change the image of the animal itself to create dynamic reactions upon interaction (click, hover, etc.)</h3></div><br>
        <div class="requirement"><h3>Make a README in your repo which includes an overall description of your project along with descriptions of each interactive element/aspect of your animal (along with how you implemented it)</h3></div><br>
        <div class="requirement"><h3><a style:color="white" href="https://raw.githubusercontent.com/lynn89-sudo/red-panda/refs/heads/main/src/lib/Zoo.svelte">This component</a> must be copied into lib and used at the top of each page on your submission</h3></div><br>

    </div>
    <div class="box">
        <h2>Are you a club leader?</h2>
        <h3>That's great! Keep these items in mind when running your workshop:</h3>
        <br>
        <div class="requirement"><h4 style:font-family="Space Mono">You, or whoever is running the workshop, should be good - not intermediate - at HTML/CSS/JS and SvelteKit. <a href="https://svelte.dev" style:color="white">Svelte documentation</a> is a good starting place for anyone new to Svelte. Participants should be familiar with HTML, CSS, and JS.</h4></div><br>
        <div class="requirement"><h4 style:font-family="Space Mono">Participants must work on their submissions for 1-2 hours in sessions, and these sessions can be broken apart into several meetings. Participants can submit their work individually at the end of the workshop and select their club's name, we advise that leaders walk participants through the proccess so the correct club is selected.</h4></div><br>
        <div class="requirement"><h4 style:font-family="Space Mono">We will provide stickers for participants that submit and will give $4 per project through <a style:color="white" href="https://hcb.hackclub.com">HCB</a> to club leaders to purchase plushies; however, we will offer $7 for submissions that are worked on for two hours and tracked on Hackatime. Unlike the main track, there are no additional Mynt payouts.</h4></div><br>
        <div class="requirement"><h4 style:font-family="Space Mono">We have a useful guide available <a style:color="white" href = "https://github.com/hackclub/The-Zoo/blob/main/zoo.pdf">here</a> for you to use during your workshop; however, clubs aren't required to complete every requirement mentioned or alluded to in the guide - just read the requirements above!</h4></div>
    </div>
    <br>
    <img src="whale.png" alt="Whale plushie" />
    <h2>More questions?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />