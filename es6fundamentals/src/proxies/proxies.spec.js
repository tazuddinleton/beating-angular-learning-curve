describe("proxies", () => {
    it("demonstrates proxy", () => {
        let unicorn = {
            legs: 4,
            color: 'brown',
            horn: true
        }


        let unicornProxy = new Proxy(unicorn, {
            get(unicorn, property) {
                if (property === 'color') {
                    return 'white';
                } else if (property === 'legs') {
                    return 10;
                } else {
                    return unicorn[property];
                }
            },
            set(unicorn, property, value) {
                if (property === 'color') {
                    unicorn[property] = 'purple';
                } else {
                    unicorn[property] = value;
                }
            }
        });

        unicornProxy.color = 'Pink';

        expect(unicorn.color).toBe('purple');
        expect(unicornProxy.color).toBe("white");
        expect(unicornProxy.legs).toBe(10);
        expect(unicornProxy.horn).toBe(true);
        expect(unicorn.legs).toBe(4);

    });

    it("should let you proxy functions", () => {
        let unicorn = {
            legs: 4,
            color: 'brown',
            horn: true,
            hornAttack: function (target) {
                return target.name + " was obliterated!";
            }
        }

        unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
            apply: function (target, context, args) {
                if(context !== unicorn){
                    return 'You cannot steal my method.';
                }                
                return target.apply(context, args);
            }
        });

        let thief = { name: "Bob" };
        thief.attack = unicorn.hornAttack;        
        let result = thief.attack(thief);


        expect(result).toBe("You cannot steal my method.")
        expect(unicorn.hornAttack(thief)).toBe("Bob was obliterated!");

    });
});