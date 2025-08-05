<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=lock_person,pets" />
</svelte:head>
<script>
    import Navbar from "$lib/navbar.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<style>
    #body {
        background-color: rgb(47, 90, 79);
        padding: 40px;
    }
    h1 span {
        font-size: 100px;
        background-color: rgb(7, 68, 55);
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
        background-color: rgb(1, 58, 58);
        padding: 20px;
        margin-bottom: 20px;
    }
    a {
        color: white;
    }
</style>

<Navbar />
<div id="body">
    <h1><span class="material-symbols-outlined">lock_person</span></h1>
    <br><br>
    <h1>Your privacy matters to us.</h1>
    <br><br><br>
    <h3>The Zoo is dedicated to keeping your personal information secure and safe, and committed to having 0 data breach incidents. Below are our privacy policies for handling your data.</h3>
    <br>
    <div class="policy">
        <h2>Identity Vault Verification</h2>
        <h3>No staff member outside HCB's operations team can access your data in the Identity Vault at <a href="https://identity.hackclub.com">identity.hackclub.com</a>. The Zoo staff will only receive a yes or no as to if you are verified and eligible to participate.</h3>
    </div>
    <div class="policy">
        <h2>Authorized access to information</h2>
        <h3>Only individuals under Hack Club's NDA can access your data directly.</h3>
    </div>
    <div class="policy">
        <h2>Using AI to analyze data</h2>
        <h3>No personally identifyable information, such as emails, names or addresses will be given to any AI model or platform. Statistics such as coding hours or mynt balances may be given to an AI model or platform.</h3>
    </div>
    <div class="policy">
        <h2>APIs containing personal information</h2>
        <h3>No public APIs, behind auth or not, will contain personal information, such as emails, names or addresses. All personal information will be securely stored directly on Airtable or locally.</h3>
    </div>
    <br><br>
    <h2>More questions?</h2>
    <h3>Hop onto <em>#the-zoo</em> channel in Hack Club's Slack</h3>
</div>
<Footer />