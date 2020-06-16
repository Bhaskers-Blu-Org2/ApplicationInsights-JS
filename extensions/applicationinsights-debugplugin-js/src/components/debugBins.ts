export class DebugBinParent {
  public el: HTMLDivElement;
  public elSpan: HTMLSpanElement;

  public _self: DebugBinParent;

  public value: number = 0;
  public showChildren: boolean = false;
  constructor(
    public parent: HTMLDivElement,
    public children: Array<DebugBin | HTMLButtonElement>,
    bottomDistance: number,
    backgroundColor?: string
  ) {
    const s = this._self = this;

    s.el = document.createElement('div');
    s.el.className = 'debug-bin-parent';
    s.el.style.bottom = `${20 + bottomDistance}px`;

    s.elSpan = document.createElement('span');
    s.elSpan.innerText = `${s.value}`;
    s.elSpan.setAttribute('data-name', 'AppInsights');
    s.el.appendChild(s.elSpan);

    s.el.onclick = () => {
      s.showChildren = !s.showChildren;
      s.el.className = 'debug-bin-parent';
      s.render();
    }

    s.render();
  }

  addClassToEl(name: string) {
    if (this.el.className.indexOf(name) === -1) {
      this.el.className += ` ${name}`;
    }
  }

  addChild(bin: DebugBin | HTMLButtonElement) {
    this.children.push(bin);
  }

  addButton(handler: (evt: MouseEvent) => void, label: string) {
    const btn = document.createElement('button');
    btn.innerText = label;
    btn.onclick = handler;
    this.addChild(btn);
  }

  increment() {
    const s = this._self;
    s.elSpan.innerText = `${++s.value}`;
  }

  render() {
    const s = this._self;
    if (!s.el.parentElement) {
      s.parent.appendChild(s.el);
    }
    for (const ch of s.children) {
      if (ch instanceof DebugBin) {
        if (ch.el.parentElement !== s.el && s.showChildren) {
          s.el.appendChild(ch.el);
        }
        else if (ch.el.parentElement === s.el && !s.showChildren) {
          s.el.removeChild(ch.el);
        }
      }
      else {
        if (s.showChildren) { s.el.appendChild(ch); }
        else { s.el.removeChild(ch); }
      }
    }
  }
}

export class DebugBin {
  public el: HTMLDivElement;
  public elName: HTMLSpanElement;
  public elValue: HTMLSpanElement;

  public _self: DebugBin;

  constructor(
    public name: string,
    public value: number,
    public parent: DebugBinParent,
    bottomDistance: number,
    backgroundColor?: string
  ) {
    const s = this._self = this;
    parent.addChild(s);

    s.el = document.createElement('div');

    s.elName = document.createElement('span');
    s.elName.innerText = `${name}: `;
    s.elName.className = 'el-name';
    s.el.appendChild(s.elName);

    s.elValue = document.createElement('span');
    s.elValue.innerText = `${value}`;
    s.elValue.className = 'el-value';
    s.el.appendChild(s.elValue);
  }

  increment() {
    const s = this._self;
    s.elValue.innerText = `${++s.value}`;
    s.parent.increment();
    s.elValue.className = 'el-value incremented';
    setTimeout(() => s.elValue.className = 'el-value', 1);
  }
}