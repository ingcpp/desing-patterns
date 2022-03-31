export enum SoundSystemState {
  On,
  Off,
}

export enum TvState {
  On,
  Off,
}

export class SoundSystem {
  private volume: number = 0;
  private state: SoundSystemState = SoundSystemState.Off;
  turnOn() {
    this.state = SoundSystemState.On;
  }

  turnOff() {
    this.state = SoundSystemState.Off;
  }

  setVolume(volumeLevel: number) {
    this.volume = volumeLevel;
  }

  getVolume(): number {
    return this.volume;
  }

  getState(): SoundSystemState {
    return this.state;
  }
}

export class Lights {
  private level: number = 0;

  setLevel(lightsLevel: number) {
    this.level = lightsLevel;
  }

  getLevel(): number {
    return this.level;
  }
}

export class TV {
  private state: TvState = TvState.Off;
  turnOn() {
    this.state = TvState.On;
  }

  turnOff() {
    this.state = TvState.Off;
  }

  getState(): TvState {
    return this.state;
  }
}

// ----
export class HomeAutomation {
  private sos: SoundSystem;
  private lights: Lights;
  private tv: TV;

  constructor(sos: SoundSystem, lights: Lights, tv: TV) {
    this.sos = sos;
    this.lights = lights;
    this.tv = tv;
  }

  public runScene() {
    this.lights.setLevel(40);
    this.tv.turnOn();

    this.sos.turnOn;
    this.sos.setVolume(100);
  }

  endScene() {
    this.sos.turnOff();
    this.tv.turnOff();
    this.lights.setLevel(0);
  }
}
