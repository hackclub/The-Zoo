<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=pets" />
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Banner from "$lib/banner.svelte";
    import Footer from "$lib/footer.svelte";

</script>
<style>
    #main {
        background-color: rgb(82, 65, 29);
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 20px;
        padding-right: 20px;
    }
    #coin {
        margin: 0 auto;
        width: 30%;
    }
    @media (min-width: 750px) {
        #coin {
            width: 10%;
        }
    }
    .rank {
        background-color: rgb(158, 132, 16);
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 20px;
    }
    .rank h2 {
        font-size: 15px;
    }
    @media (min-width: 750px) {
        .rank {
            margin-left: 30%;
            margin-right: 30%;

            h3 {
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }
    @media (max-width: 750px) {
        h1 {
            font-size: 50px;
        }
    }

    a {
        color: white;
    }
</style>
<Navbar />
<Banner />
<div id="main">
    <h2 style="font-size: 40px;">How to earn Mynts</h2>
    <br>
    <img src="mynt.png" alt="Mynt Coin" id="coin"/>
    <br><br>
    <h3>In a nutshell, mynts are the currency you earn for your animals in the zoo. The better your submissions are, the more mynts you earn.</h3>
    <h3>Throughout the duration of the YSWS, your mynts are added up. By the end, after everything is finalized, you will get an <a href="https://hcb.hackclub.com">HCB</a> grant equivalent to the amount of mynts you earned (1 MYN = 1 USD). Whatever your choice of plushie costs + delivery fees (or just pick it up for less) is the amount of mynts you will need</h3>    <br><br><br>
    <div class="rank" >
        <h3>You can earn</h3>
        <h1>15 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Following the minimum <a href="/requirements">project requirements</a></h2>
        <h3>You must do this to get ANY mynts</h3>
        <br>
    </div>
    <h3>------------</h3><br><br>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>2 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Each additional hour you spend beyond the base requirement of 5 (not beyond 10 hours)</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>2 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Using <code><a href="https://svelte.dev/docs/svelte/svelte-head">svelte:head</a></code></h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>2 MYN</h1>
        <h4><em>+ a special prize</em></h4>
        <h3>for</h3>
        <br>
        <h2>Making your project about an endangered animal or species</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>3 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Making your facts panel fully dynamic (cannot include any hardcoded variables or values, all values should be derived from analysis of the JSON file itself)</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>3 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Including <em>$effect</em> runes on both your main and interactive page (they must have an individual unique purpose)</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>3 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Implementing an easter egg, random chance rare event, etc.</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>3 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Each additional interactive feature you add to your interactive page</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>4 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Making your project responsive (must work on mobile)</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>6 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Impressing us with your project</h2>
        <br>
    </div>
    <div class="rank">
        <h3>You can earn</h3>
        <h1>10 MYN</h1>
        <h3>for</h3>
        <br>
        <h2>Blowing our socks off with how impressive your project is (this is more selective than the Ivy League... so get grinding if you want a shot at this)</h2>
        <h4>*Cannot be doubled with the 6 MYN bonus</h4>
        <br>
    </div>
</div>
<Footer />
