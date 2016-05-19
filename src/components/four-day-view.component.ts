import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";

@Component({
    selector: "four-day-view",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<div>four day view</div>"
})
export class FourDayComponent implements OnInit {

    public ngOnInit(): void {
        console.log("inited");
    }

}