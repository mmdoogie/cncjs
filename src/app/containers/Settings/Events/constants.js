import constants from 'namespace-constants';
import i18n from 'app/lib/i18n';

export const {
    MODAL_CREATE_RECORD,
    MODAL_UPDATE_RECORD
} = constants('containers/settings/events', [
    'MODAL_CREATE_RECORD',
    'MODAL_UPDATE_RECORD'
]);

export const SYSTEM_EVENTS = [
    'startup',
    'port:open',
    'port:close'
];

export const DUAL_EVENTS = [
    'controller:ready',
    'gcode:load',
    'gcode:unload',
    'gcode:start',
    'gcode:stop',
    'gcode:pause',
    'gcode:resume',
    'feedhold',
    'cyclestart',
    'homing',
    'sleep',
    'macro:run',
    'macro:load'
];

export const mapEventToName = (evt) => {
    const eventNameMap = {
        'startup': i18n._('Startup (System only)'),
        'port:open': i18n._('Open a serial port (System only)'),
        'port:close': i18n._('Close a serial port (System only)'),
        'controller:ready': i18n._('Ready to start'),
        'gcode:load': i18n._('G-code: Load'),
        'gcode:unload': i18n._('G-code: Unload'),
        'gcode:start': i18n._('G-code: Start'),
        'gcode:stop': i18n._('G-code: Stop'),
        'gcode:pause': i18n._('G-code: Pause'),
        'gcode:resume': i18n._('G-code: Resume'),
        'feedhold': i18n._('Feed Hold'),
        'cyclestart': i18n._('Cycle Start'),
        'homing': i18n._('Homing'),
        'sleep': i18n._('Sleep'),
        'macro:run': i18n._('Run Macro'),
        'macro:load': i18n._('Load Macro')
    };

    if (evt in eventNameMap) {
        return eventNameMap[evt];
    } else {
        return '';
    }
};
