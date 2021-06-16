var images= [
    "blob:https://web.whatsapp.com/f9cd9b37-9450-43f9-8cea-ffd14ff9d2fc";
    "blob:https://web.whatsapp.com/0b903958-5a74-4f73-81dd-2dff41d91761";
    "blob:https://web.whatsapp.com/aee3a351-d848-494e-a71b-6361ed9a472e";
    "blob:https://web.whatsapp.com/6e4b84bd-7e6d-4f5f-950f-47b48d8f9873";
];

var names= [
    "My Family Album", "Amit Kumar", "Neelima", "Advita Ishi", "Anvit Arav"
];

var i=0;
function update() {
    i++;
    var number_of_family_members_in_array = 5
    if(i>number_of_family_members_in_array)
    {
        i = 0
    }

    var updated_images = images[i]
    var updated_names = names[i]
    document.getElementById("family_member").src= updated_images;
    document.getElementById("family_member_name").src= updated_names;
}