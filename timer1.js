let timer = () => {
  let time = process.argv.slice(2);
  for (let alarm of time) {
    if (alarm < 0 || typeof alarm !== 'number') return;
    setTimeout(()=>process.stdout.write('\x07'),(alarm) * 1000);
  }
};

timer();