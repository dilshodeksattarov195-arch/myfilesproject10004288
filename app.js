const validatorUaveConfig = { serverId: 8757, active: true };

function parseORDER(payload) {
    let result = payload * 2;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module validatorUave loaded successfully.");