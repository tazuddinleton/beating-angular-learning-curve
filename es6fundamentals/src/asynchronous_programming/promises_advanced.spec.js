describe("advanced promises", () => {
    it("should chain promises using then", (done) => {
        

        getOrder(3)
        .then((order) => {
             return getUser(order.userId);
        }).then((user) => {
            return getCompany(user.companyId);
        }).then((company)=> {
            expect(company.name).toBe("MyFancyCompany");          
            done();
        }).catch((err) => {
            // handle error            
            done();
        });


        function getOrder(id){            
            return Promise.resolve({id: 3, userId: 2});
        }
        function getUser(userId){
            return Promise.resolve({id: 2, companyId: 100});
        }
        function getCompany(companyId){
            return Promise.resolve({id: 100, name: "MyFancyCompany"});
            //return Promise.reject("unknown error");
        }
    });


    it("should resolve after all promises with all", ()=>{
        let courseIds = [1,2,3];
        let promises = [];
        let courses = [
            {id: 1, name: "best es6 course"},
            {id: 2, name: "best c# course"},
            {id: 3, name: "best graphic design course"}
        ]

        courseIds.forEach(id => promises.push(getCourse(id)));

        Promise.all(promises).then((courses)=> {
            expect(courses.length).toBe(3);
        });
      
        function getCourse(id){           
            return Promise.resolve(courses.find(x => x.id == id));
        }
    });

    it("should resolve after first promises with race", ()=>{
        let courseIds = [1,2,3];
        let promises = [];
        let courses = [
            {id: 1, name: "best es6 course"},
            {id: 2, name: "best c# course"},
            {id: 3, name: "best graphic design course"}
        ]

        courseIds.forEach(id => promises.push(getCourse(id)));

        Promise.race(promises).then((course)=> {
            expect(course).toEqual({id: 1, name: "best es6 course"})
        });
      
        function getCourse(id){           
            return Promise.resolve(courses.find(x => x.id == id));
        }
    });
});