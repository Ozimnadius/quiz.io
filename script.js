// @prepros-prepend node_modules/form_to_object/dist/formToObject.min.js

window.addEventListener('load', function () {
    let data = {
        home: {
            system: {
                local: 5200,
                server: 60000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        flat: {
            system: {
                local: 5200,
                server: 60000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        shop: {
            system: {
                local: 7200,
                server: 80000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        office: {
            system: {
                local: 5200,
                server: 60000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        store: {
            system: {
                local: 7200,
                server: 80000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        wash: {
            system: {
                local: 5200,
                server: 80000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        lift: {
            system: {
                local: 5200,
                server: 60000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        parking: {
            system: {
                local: 11200,
                server: 150000
            },
            cameras: {
                inhouse: 5300,
                house: 5000,
                fence: 5000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        airport: {
            system: {
                local: 21900,
                server: 300000
            },
            cameras: {
                inhouse: 12000,
                house: 5000,
                fence: 7000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        mall: {
            system: {
                local: 21900,
                server: 300000
            },
            cameras: {
                inhouse: 9200,
                house: 5000,
                fence: 7000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        },
        plant: {
            system: {
                local: 21900,
                server: 300000
            },
            cameras: {
                inhouse: 14000,
                house: 5000,
                fence: 7000,
            },
            period: {
                5: 3100,
                10: 4700,
                20: 4700,
                30: 6100,
                60: 8200
            },
            other: {
                record: 2000,
                remote: 5000
            }
        }
    }

    class Quiz {
        constructor(settings) {
            this.data = settings.data;
            this.quiz = document.querySelector(settings.selector);
            this.wrap = this.quiz.querySelector('.quiz__wrap');
            this.title = this.quiz.querySelector('.quiz__title');
            this.total = this.quiz.querySelector('.quiz__total');

            this.progress = this.quiz.querySelector('.qprogress progress');
            this.percents = this.quiz.querySelector('.qprogress__name b');

            this.steps = this.quiz.querySelectorAll(settings.steps);

            this.prevBtn = this.quiz.querySelector('.quiz__prev');
            this.nextBtn = this.quiz.querySelector('.quiz__next');

            this.activeIndex = 0;
            this.totalWeight = 10;

            this.stepActive = false;

            this.#init();

        }

        #init() {
            this.steps.forEach((step) => step.addEventListener('input', (e) => {
                if (e.target.classList.contains('jsRequired')) {
                    this.toggleBtns();
                }
            }));
            this.nextBtn.addEventListener('click', () => this.next());
            this.prevBtn.addEventListener('click', () => this.prev());
        }

        get isLastSlide() {
            return this.activeIndex == this.steps.length;
        }

        get isActive() {
            let inputs = Array.from(this.steps[this.activeIndex].querySelectorAll('.jsRequired'));

            if (inputs.some(i => i.type === 'range')) {
                return Array.from(inputs).some(i => i.value > 0);
            } else if (inputs.some(i => i.type === 'checkbox')) {
                return true;
            } else {
                return inputs.some(i => i.checked);
            }
        }

        get getTitle() {
            return this.steps[this.activeIndex].dataset.title;
        }

        toggleBtns = () => {
            if (this.isActive) {
                this.nextBtn.classList.remove('hidden');
            } else {
                this.nextBtn.classList.add('hidden');
            }

            if (this.activeIndex > 0) {
                this.prevBtn.classList.remove('hidden');
            } else {
                this.prevBtn.classList.add('hidden');
            }
        }

        prev() {
            this.activeIndex = this.activeIndex - 1;
            this.changeSlide(this.activeIndex);
        }

        next() {
            this.activeIndex = this.activeIndex + 1;
            this.changeSlide(this.activeIndex);
        }

        changeSlide(index) {
            if (this.isLastSlide) {
                this.finish();

            } else {
                this.title.innerHTML = this.getTitle;
                this.wrap.style.transform = `translateX(calc(-${index * 100}% - ${index * 30}px))`;
                this.updateProgress();
                this.toggleBtns();
            }

        }

        updateProgress() {
            this.progress.value = this.activeIndex;
            this.percents.innerHTML = Math.floor(this.steps[this.activeIndex].dataset.weight / this.totalWeight * 100) + '%';
        }

        finish() {
            this.total.classList.add('active');

            let dataForm = formToObject(this.quiz);

            let data = this.data[dataForm.type];
            let system = data.system[dataForm.system];
            let cameras = (data.cameras.inhouse * dataForm.cameras.inhouse) + (data.cameras.house * dataForm.cameras.house) + (data.cameras.fence * dataForm.cameras.fence);
            let period = data.period[dataForm.period];
            let other = data.other[dataForm.other] || 0;

            let total = system + cameras + period + other;

            this.total.querySelector('.qtotal__price').innerHTML = `${total.toLocaleString()} руб.`

        }

    }

    let quiz = new Quiz({
        selector: '.quiz',
        steps: '.qstep',
        data: data
    });

    class Range {
        constructor(list) {
            this.ranges = list;

            this.ranges.forEach(i => i.addEventListener('input', this.update))
        }

        update() {
            this.querySelector('.qrange__title b').innerHTML = this.querySelector('.qrange__range').value;
        }

    }

    let ranges = new Range(document.querySelectorAll('.qrange'));

});