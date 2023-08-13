//Map

const state_and_country = new Map();
state_and_country.set("IN","INDIA")
state_and_country.set("UK","UNITED KINGDOM")
state_and_country.set("FR","FRANCE")

for(const [key,value] of state_and_country){
    console.log(key, ":-", value);
}

