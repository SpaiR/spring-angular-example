import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'disqus',
    template: `<div id="disqus_thread"></div>`,
    styleUrls: [ './disqus.component.scss' ]
})
export class DisqusComponent implements AfterViewInit {

    @Input() identifier: string = null;
    @Input() title: string = null;

    private disqusShortname: string = 'spring-boot-angular-example';
    private disqusObject: any = window['DISQUS'];
    private disqusConfig: any = window['disqus_config'];

    ngAfterViewInit(): void {
        if (this.identifier == null) {
            console.error('Warning! Disqus component does not have setup `identifier` property. Init cancelled.');
            return;
        }

        if (this.disqusObject) {
            this.reset();
        } else {
            this.init();
        }

    }

    private init(): void {
        this.disqusConfig = this.getConfig();
        this.buildScript();
    }

    private buildScript(): void {
        const s = document.createElement('script');
        s.src = 'https://' + this.disqusShortname + '.disqus.com/embed.js';
        s.async = true;
        s.setAttribute('data-timestamp', new Date().toDateString());
        document.head.appendChild(s);
    }

    private reset(): void {
        this.disqusObject.reset({
            reload: true,
            config: this.getConfig()
        });
    }

    private getConfig(): () => void {
        const self = this;
        return function () {
            this.page.identifier = self.identifier;
            this.page.url = document.location.href;
        }
    }
}