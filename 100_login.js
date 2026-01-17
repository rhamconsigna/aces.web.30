const sign = document.getElementById("googlesign");

const supabaseUrl = 'https://iarjrxbkgeicfsdvdfil.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcmpyeGJrZ2VpY2ZzZHZkZmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTA4NjAsImV4cCI6MjA4Mzk2Njg2MH0.MkXmwSnSxXPjcpZ0GTDePjv-G-yw9K74TOaaUQSOsVg'; 
const upabase = supabase.createClient(supabaseUrl, supabaseKey);


if (sign) {
    sign.addEventListener("click", signin);
}


async function signin() {
    console.log("Starting Google Auth...");
    const { data, error } = await upabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin + '/25_user.html'
        }
    });

    if (error) {
        console.error("Login Error:", error.message);
        alert("Login failed: " + error.message);
    }
}