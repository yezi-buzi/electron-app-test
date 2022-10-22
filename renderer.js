const information = document.getElementById('info');
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;
const msg = document.getElementById('msg');
msg.innerText = yezi.msg;
versions.ping().then(res => {
    console.log('ping => ', res);
});