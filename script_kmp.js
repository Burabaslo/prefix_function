var container = document.getElementById("array");


function printf() {
  var string_parse = document.querySelector('input').value;
  var array_ = string_parse.split("");
  console.log('Массив содержит ' + array_.length + ' элементов: ' + array_.join(' / '));
}

// Function to generate the array text & pattern
function generate_t_p(array_, plen) {

    var n = array_.length;
    for (var i = 0; i < n; i++) {
        // Creating element div
        var array_ele = document.createElement("div");
        // Adding class 'block' to div
        array_ele.classList.add("block_t_p");
        // Adding style to div
        array_ele.style.height = `5px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = array_[i];
        if (i < plen) {
            array_ele.style.backgroundColor = "#32CD32";
        }
        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
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
  txt_label.innerText = 'Pattern # String';
  ptrn.classList.add("prefix");
  ptrn.style.height = `5px`;
  ptrn.style.transform = `translate(${-80}px)`;
  var ptrn_label = document.createElement("label");
  ptrn_label.classList.add("block_id_2");
  ptrn_label.innerText = 'Prefix Function';
  ans.classList.add("answer");
  ans.style.height = `5px`;
  ans.style.transform = `translate(${-80}px)`;
  var ans_label = document.createElement("label");
  ans_label.classList.add("block_id_2");
  ans_label.innerText = 'Answer';
  txt.appendChild(txt_label);
  container.appendChild(txt);
  ptrn.appendChild(ptrn_label);
  container.appendChild(ptrn);
  ans.appendChild(ans_label);
  container.appendChild(ans);

}

// Function to generate the array that prefix function returned

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function restart_all() {
  const es = document.getElementsByClassName('block_answer');
  while (es.length > 0) es[0].remove();
  const es_1 = document.getElementsByClassName('block_prefix');
  while (es_1.length > 0) es_1[0].remove();
  const es_2 = document.getElementsByClassName('block_t_p');
  while (es_2.length > 0) es_2[0].remove();
  const es_3 = document.getElementsByClassName('t_p');
  while (es_3.length > 0) es_3[0].remove();
  const es_4 = document.getElementsByClassName('prefix');
  while (es_4.length > 0) es_4[0].remove();
  const es_5 = document.getElementsByClassName('answer');
  while (es_5.length > 0) es_5[0].remove();
}

function generate_prefix(array_) {

  var n = array_.length;
  for (var i = 0; i < n; i++) {
      // Creating element div
      var array_ele = document.createElement("div");
      // Adding class 'block' to div
      array_ele.classList.add("block_prefix");
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

function generate_answer(array_, p) {
  plen = parseInt(p)
  //console.log(p);
  var n = array_.length;
  for (var i = 0; i < n; i++) {
      // Creating element div
      var array_ele = document.createElement("div");
      // Adding class 'block' to div
      array_ele.classList.add("block_answer");
      // Adding style to div
      array_ele.style.height = `5px`;
      //

      array_ele.style.transform = `translate(${(1 + i + plen) * 30}px)`;

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



function PrefixFunction(s) {
  var prefix = new Array(s.length);
  prefix.fill(0);
  for (var i = 1; i < prefix.length; i += 1) {
    var k = prefix[i - 1];
    while (k > 0 && s[i] != s[k]) {
      k = prefix[k - 1];
      //console.log(k));
    }
    if (s[i] == s[k]) {
      k++;
    }
    //console.log(k);
    prefix[i] = k;
  }
  return prefix;
}


async function colorize(plen, i, v_prefix, v_p_t, v_answer) {
  var k = parseInt(plen) + parseInt(i) + 1;
  v_prefix[k].style.backgroundColor = "#32CD32";
  do {
    v_p_t[k].style.backgroundColor = "#32CD32";
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
      }, 600)
    );
    k -= 1;
  } while (k > i + 1);
  v_answer[i - plen + 1].childNodes[0].innerText = 1;
  v_answer[i - plen + 1].style.backgroundColor = "#32CD32";
}



async function kmp(delay = 400) {
  var text = document.getElementById("text_input").value;
  var pattern = document.getElementById("pattern").value;
  var s = pattern + '#' +  text;
  var prefix = PrefixFunction(s);
  var plen = pattern.length, tlen = text.length;
  var answer = new Array(tlen);
  answer.fill(0);
  generate_blocks();
  generate_t_p(s, plen);
  generate_prefix(prefix);
  //console.log(plen);
  generate_answer(answer, plen);
  var v_t_p = document.querySelectorAll(".block_t_p");
  var v_prefix = document.querySelectorAll(".block_prefix");
  var v_answer = document.querySelectorAll(".block_answer");
  var flag = 1
  for (var i = 1; i < tlen + 1; i += 1) {
    if (flag == 1) {
      v_prefix[i + plen].style.backgroundColor = "#6b5b95";
    }
    //flag = 0;
    if (i < tlen) {
      v_prefix[i + plen + 1].style.backgroundColor = "#ff7f50";
    }
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
    );
    if (prefix[plen + i + 1] == plen) {
       colorize(plen, i, v_prefix, v_t_p, v_answer);
       flag = 0;
    } else {
       flag = 1;
    };
       //v_answer[i - plen + 1].style.backgroundColor = "#FF7F50";
  }
}
