import { TV, SoundSystem, Lights, HomeAutomation } from "./facade";

describe("facade pattern", () => {
  it("should run the movie scene for a home automated system", () => {
    const tv = new TV();
    const lights = new Lights();
    const soundSystem = new SoundSystem();

    enum DeviceState {
      On,
      Off,
    }

    expect(tv.getState()).toEqual(DeviceState.Off);
    expect(lights.getLevel()).toEqual(0);
    expect(soundSystem.getVolume()).toEqual(0);

    const homeAutomation = new HomeAutomation(soundSystem, lights, tv);
    homeAutomation.runScene();

    expect(tv.getState()).toEqual(DeviceState.On);
    expect(lights.getLevel()).toEqual(40);
    expect(soundSystem.getVolume()).toEqual(100);
  });
});
