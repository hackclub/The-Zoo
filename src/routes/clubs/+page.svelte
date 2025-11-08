<svelte:head>
    <link rel="stylesheet" href="https://css.hackclub.com/theme.css">
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Banner from "$lib/clubbanner.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<style>
    #body {
        background-color: rgb(122, 148, 7);
        padding: 40px;
    }
    h1 span {
        font-size: 100px;
        background-color: rgb(28, 70, 28);
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
</style>

<Navbar />
<Banner />
<div id="body">
    <h1><span translate="no" class="material-symbols-outlined">groups</span></h1>
    <br><br>
    <h1>The Zoo, for Hack Clubs</h1>
    <h3>For clubs, by a club leader</h3>
    <br>
    <div class="box">
        <h2>Page coming soon!</h2>
        <h3>This is part of The Zoo v2</h3>
    </div>
    <h2>More questions?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />