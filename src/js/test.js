describe("Таймер",  function () {
	it("Возврат обьекта ", function () {
		assert.typeOf(getTimeRemaining(), 'object');
	});
	it("Таймер отсчета ", function () {
		assert.typeOf(setClock('timer', deadLine), 'string');
	});
});

describe("Общая сумма", function () {
	it("Равен нулю ", function () {
		assert.equal(total, 0);
	});
});