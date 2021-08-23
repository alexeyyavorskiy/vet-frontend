import {Directive, OnDestroy} from '@angular/core';
import {SubSink} from 'subsink';

@Directive()
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
    subscriptions = new SubSink();

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
