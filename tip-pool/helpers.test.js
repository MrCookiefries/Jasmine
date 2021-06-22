describe("helpers tests including setup and cleanup", () => {
    beforeEach(() => {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it("should create a total bill sum on sumPaymentTotal()", () => {
        expect(sumPaymentTotal("billAmt")).toEqual(50);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("billAmt")).toEqual(150);
    });

    it("should create a total tip sum on sumPaymentTotal()", () => {
        expect(sumPaymentTotal("tipAmt")).toEqual(10);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipAmt")).toEqual(30);
    });

    it("should create a total tip percet on sumPaymentTotal()", () => {
        expect(sumPaymentTotal("tipPercent")).toEqual(20);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipPercent")).toEqual(40);
    });

    it("should calc a tip percent with one payment on calculateTipPercent()", () => {
        expect(calculateTipPercent(100, 48)).toEqual(48);
        expect(calculateTipPercent(64, 13)).toEqual(20);
    });

    it("should create a new td with value and append it to tr on appendTd()", () => {
        let newTr = document.createElement("tr");
        appendTd(newTr, "blob");
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstElementChild.innerText).toEqual("blob");
    });

    it("should create a new delete button for a tr on appendDeleteBtn()", () => {
        let newTr = document.createElement("tr");
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstElementChild.innerText).toEqual('X');
    });

    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});