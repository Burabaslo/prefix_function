var container = document.getElementById("array");

function restart_all() {
  const es_1 = document.getElementsByClassName('block');
  while (es_1.length > 0) es_1[0].remove();
  const es_2 = document.getElementsByClassName('block_q');
  while (es_2.length > 0) es_2[0].remove();
  const es_3 = document.getElementsByClassName('t_p');
  while (es_3.length > 0) es_3[0].remove();
  const es_4 = document.getElementsByClassName('prefix');
  while (es_4.length > 0) es_4[0].remove();
}

function printf() {
  var string_parse = document.querySelector('input').value;
  var array_ = string_parse.split("");
  console.log('Массив содержит ' + array_.length + ' элементов: ' + array_.join(' / '));
}

function generate_blocks() {
  var txt = document.createElement("div");
  var ptrn = document.createElement("div");
  var ans = document.createElement("div");
  txt.classList.add("t_p");
  txt.style.height = `5px`;
  txt.style.transform = `translate(${-80}px)`;
  var txt_label = document.createElement("label");
  txt_label.classList.add("block_id_2");
  txt_label.innerText = 'String';
  ptrn.classList.add("prefix");
  ptrn.style.height = `5px`;
  ptrn.style.transform = `translate(${-80}px)`;
  var ptrn_label = document.createElement("label");
  ptrn_label.classList.add("block_id_2");
  ptrn_label.innerText = 'Prefix Function';

  txt.appendChild(txt_label);
  container.appendChild(txt);
  ptrn.appendChild(ptrn_label);
  container.appendChild(ptrn);


}

// Function to generate the array of blocks
function generatearray() {
    var string_parse = document.querySelector('input').value;
    var array_ = string_parse.split("");
    var n = array_.length;
    for (var i = 0; i < n; i++) {
        // Return a value from 1 to 100 (both inclusive)
        //
        // Creating element div
        var array_ele = document.createElement("div");
        // Adding class 'block' to div
        array_ele.classList.add("block");
        // Adding style to div
        array_ele.style.height = `5px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = array_[i];

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

function generate_q() {
  var string_parse = document.querySelector('input').value;
  var array_ = string_parse.split("");
  var n = array_.length;
  for (var i = 0; i < n; i++) {
      // Return a value from 1 to 100 (both inclusive)
      //
      // Creating element div
      var array_ele = document.createElement("div");
      // Adding class 'block' to div
      array_ele.classList.add("block_q");
      // Adding style to div
      array_ele.style.height = `5px`;
      array_ele.style.transform = `translate(${i * 30}px)`;

      // Creating label element for displaying
      // size of particular block
      var array_ele_label = document.createElement("label");
      array_ele_label.classList.add("block_id");
      array_ele_label.innerText = 0;

      // Appending created elements to index.html
      array_ele.appendChild(array_ele_label);
      container.appendChild(array_ele);
  }
}

function colorize(blocks, i, k) {
    // for (var j = 0; j < k; j += 1) {
    //   blocks[i].style.backgroundColor = "#32CD32";
    // };
    for (var j = i; j > i - k; j -= 1) {
      blocks[i].style.backgroundColor = "#32CD32";
    }
}

function discolorize(blocks) {
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#6b5b95";
  }
}


async function PrefixFunction(delay = 700) {
  generate_blocks()
  var blocks = document.querySelectorAll(".block");
  var blocks_q = document.querySelectorAll(".block_q");
  console.log(blocks_q.length);
  for (var i = 1; i < blocks_q.length; i += 1) {
    console.log("run");
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
    );
    blocks_q[i - 1].style.backgroundColor = "#6b5b95";
    blocks_q[i].style.backgroundColor = "#ff7f50";
    //Number(blocks[j].childNodes[0].innerHTML)

    var k = parseInt(blocks_q[i - 1].childNodes[0].innerHTML);
    while (k > 0 && blocks[i].childNodes[0].innerHTML != blocks[k].childNodes[0].innerHTML) {
      k = parseInt(blocks_q[k - 1].childNodes[0].innerHTML);
      //console.log(k));
    }
    if (blocks[i].childNodes[0].innerHTML == blocks[k].childNodes[0].innerHTML) {
      k++;
    }
    console.log(k);
    if (k > 0) {
      colorize(blocks, i, k);
      await new Promise((resolve) =>
          setTimeout(() => {
              resolve();
          }, 1200)
      );
      //discolorize(blocks);
    }

    blocks_q[i].childNodes[0].innerHTML = k;
    blocks_q[i].style.backgroundColor = "#32CD32";

  }
  // await new Promise((resolve) =>
  //     setTimeout(() => {
  //         resolve();
  //     }, delay)
  // );
  // blocks_q[blocks_q.length - 1].style.backgroundColor = "#6b5b95";
}



// Calling generatearray function
//generatearray();

// Calling BubbleSort function
//BubbleSort();
