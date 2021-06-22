describe("payments tests including setup & cleanup", () => {
    beforeEach(() => {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    it("should add to allPayments on submitPaymentInfo()", () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual("50");
        expect(allPayments['payment1'].tipAmt).toEqual("10");
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it("should not add to allPayments with an empty input on submitPaymentInfo()", () => {
        billAmtInput.value = "";
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
        tipAmtInput.value = "";
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("should make a new payment on createCurPayment()", () => {
        let testPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        };
        expect(createCurPayment()).toEqual(testPayment);
    });

    it("should not make a payment with an empty input on createCurPayment()", () => {
        billAmtInput.value = "";
        expect(createCurPayment()).toEqual(undefined);
        tipAmtInput.value = "";
        expect(createCurPayment()).toEqual(undefined);
    });

    it("should not make a payment with an negative amounts on createCurPayment()", () => {
        billAmtInput.value = -40;
        expect(createCurPayment()).toEqual(undefined);
        tipAmtInput.value = -16;
        expect(createCurPayment()).toEqual(undefined);
    });

    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});