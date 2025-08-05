<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=assured_workload,pets" />
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<style>
    #body {
        background-color: rgb(90, 76, 47);
        padding: 40px;
    }
    h1 span {
        font-size: 100px;
        background-color: rgb(68, 54, 7);
        padding: 30px;
        border-radius: 360px;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    h1 {
        font-size: 40px;
    }
    .policy {
        background-color: rgb(56, 43, 7);
        padding: 20px;
        margin-bottom: 20px;
    }
    a {
        color: white;
    }
</style>

<Navbar />
<div id="body">
    <h1><span class="material-symbols-outlined">assured_workload</span></h1>
    <br><br>
    <h1>Fraud is not tolerated.</h1>
    <br><br><br>
    <h3>The Zoo reserves the right to flag and/or reject submissions upon suspicion of fraud. Once suspected for fraud, you likely will not be able to resubmit any work for this YSWS. Your submission may be flagged for fraud if one or more conditions below apply.</h3>
    <br>
    <div class="policy">
        <h2>Created by someone not in Middle School or High School</h2>
        <h3>This program is only open to those in Middle School and High School. Those 19 or above are not allowed to participate.</h3>
    </div>
    <div class="policy">
        <h2>Extensive use of AI</h2>
        <h3>Usage of AI beyond simple debugging is considered fraud and will not be condoned.</h3>
    </div>
    <div class="policy">
        <h2>Submitting projects not tracked on Hackatime</h2>
        <h3>If your project is not tracked on <a href="https://hackatime.hackclub.com">Hackatime</a>, it is not eligible for submission and will be flagged.</h3>
    </div>
    <br><br>
    <h2>More questions?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />