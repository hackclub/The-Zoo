<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=lock_person,pets" />
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Banner from "$lib/banner.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<style>
    #body {
        background-color: rgb(44, 59, 77);
        padding: 40px;
    }
    .content {
        background-color: rgb(62, 63, 133);
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 50px;
    }
    a {
        color: white;
    }
    .service {
        border: none;
        margin-bottom: 10px;
        background-color: rgb(11, 11, 53);
        color: white;
    }
    .service:hover {
        background-color: rgb(84, 84, 184);
    }
    #globe {
        margin: 0 auto;
        display: block;
        width: 50%;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -moz-user-drag: none;
    }
    @media (min-width: 750px) {
        #globe {
            width: 15%;
        }
    }
</style>

<Navbar />
<Banner />
<div id="body">
    <br><br>
    <h2 style="font-size: 35px;">What if I can't order from Ikea?</h2>
    <br>
    <h3>Ikea is amazing <em>(if you've never been to one, put it on your bucket list)</em>; however, not everyone has access to one. Maybe you live in a country that doesn't have one or you live out of range for delivery. Don't worry, we still got you covered!</h3>
    <h3>If you live in a country/region where delivery is either very expensive (must be unreasonable pricing) or just not available, you are eligible to use your mynts towards buying plushies on another shipping service.</h3>
    <br>
    <img id="globe" src="monde.png" alt="globe plushie"/>
    <br><br>
    <div class="content">
        <h2>Approved 3rd Party Services</h2><br>
        <button class="service" onclick = { window.location.href = "https://amazon.com" }><h2>Amazon</h2></button><br>
        <button class="service" onclick = { window.location.href = "https://shopee.com" }><h2>Shopee</h2></button><br>
        <button class="service" onclick = { window.location.href = "https://ebay.com" }><h2>eBay</h2></button><br>
        <br>
        <h4>*We are not able to support local vendors, you must buy your plushie from an online (reliable) shipping service.</h4>
    </div>
    <br>
    <h3>You do not need to purchase an Ikea plushie from these services, any animal plushie will work.</h3>
    <h3>Please note, if you do not meet the conditions listed above, you cannot purchase your plushie outside Ikea. You must declare on your submission form if you cannot purchase from Ikea in order to use this.</h3>
    <br><br>
    <h2>More questions? Want to request an alternate service?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />